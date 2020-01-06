package com.qingyun.utils;


import java.io.File;

import org.springframework.util.StringUtils;

/**
 * Created by JAVA on 2018/7/24.
 */
public class CheckAuthorizeCode {

    /**
     * 验证授权方法
     * @param licensePath
     * @param xm_name
     * @param xzqh
     * @return
     * @throws Exception
     */
    public static boolean AuthorizeCode(String licensePath,String xm_name,String xzqh) throws Exception {
        File file = new File(licensePath);
        if(!file.exists()){
            return false; //如果授权文件都不存在，肯定还未授权直接返回false
        }
        //获取硬盘序号
        String code = LicenseCode.getBaseCode(xm_name,xzqh);
        //读取授权码文件，获取授权码
        String encoder = EncoderFile.myread(file).trim();
        if(StringUtils.isEmpty(encoder)){
            return false;
        }
        //解析授权码，与本机的系统名称+行政区划+硬盘序号进行比较，这里仅仅只是用的字符串contains方法
        String en = LicenseCode.getPlaintext(encoder);
        if (!en.contains(code)) {
            throw new Exception();
        }
        /**
         * 判断时间是否过期（这一步必须判断）
         * 因为系统名称+行政区划+硬盘号+当前时间构成了申请码
         * 系统名称+行政区划+硬盘号+授权时间+授权截止时间构成了授权码
         * 两者的不同，仅仅在于授权码多了一个截止时间。
         * 如果仅仅判断了是否包含，那会出现一个bug，直接把申请码当做授权码就能通过验证的
         * 这里没用到授权时间，你可以加密的时候不要当前时间。
         */
        String[] split = en.split(",");
        if (!DateUtils.authorize_date(split[4])) {
            throw new Exception();
        }
        return true;
    }



}
