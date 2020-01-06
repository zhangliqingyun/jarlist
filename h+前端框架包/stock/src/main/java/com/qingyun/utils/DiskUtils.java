package com.qingyun.utils;

import java.io.*;

/**
 * Created by JAVA on 2018/7/24.
 * 获取硬盘编号的工具类
 */
public class DiskUtils {


    public static String getSerialNumber(String drive) {
        String result = "";
        try {
            File file = File.createTempFile("damn", ".vbs");
            file.deleteOnExit();
            FileWriter fw = new java.io.FileWriter(file);
            String vbs = "Set objFSO = CreateObject(\"Scripting.FileSystemObject\")\n"
                    + "Set colDrives = objFSO.Drives\n"
                    + "Set objDrive = colDrives.item(\""
                    + drive
                    + "\")\n"
                    + "Wscript.Echo objDrive.SerialNumber"; // see note
            fw.write(vbs);
            fw.close();
            Process p = Runtime.getRuntime().exec(
                    "cscript //NoLogo " + file.getPath());
            BufferedReader input = new BufferedReader(new InputStreamReader(
                    p.getInputStream()));
            String line;
            while ((line = input.readLine()) != null) {
                result += line;

            }
            input.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result.trim();
    }

    public static String getHdSerialInfo() {

        String line = "";
        String HdSerial = "";//定义变量 硬盘序列号
        try {
            Process proces = Runtime.getRuntime().exec("cmd /c dir c:");//获取命令行参数
            BufferedReader buffreader = new BufferedReader(new InputStreamReader(proces.getInputStream(),"gbk"));

            while ((line = buffreader.readLine()) != null) {
                if (line.indexOf("卷的序列号是 ") != -1) {  //读取参数并获取硬盘序列号

                    HdSerial = line.substring(line.indexOf("卷的序列号是 ") + "卷的序列号是 ".length(), line.length());
                    break;
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return HdSerial;
    }

    public static String getMotherboardSN() {
        String result = "";
        try {
            File file = File.createTempFile("realhowto", ".vbs");
            file.deleteOnExit();
            FileWriter fw = new java.io.FileWriter(file);

            String vbs = "Set objWMIService = GetObject(\"winmgmts:\\\\.\\root\\cimv2\")\n"
                    + "Set colItems = objWMIService.ExecQuery _ \n"
                    + "   (\"Select * from Win32_BaseBoard\") \n"
                    + "For Each objItem in colItems \n"
                    + "    Wscript.Echo objItem.SerialNumber \n"
                    + "    exit for  ' do the first cpu only! \n" + "Next \n";

            fw.write(vbs);
            fw.close();
            Process p = Runtime.getRuntime().exec(
                    "cscript //NoLogo " + file.getPath());
            BufferedReader input = new BufferedReader(new InputStreamReader(p
                    .getInputStream()));
            String line;
            while ((line = input.readLine()) != null) {
                result += line;
            }
            input.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result.trim();
    }

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        System.out.println(getHdSerialInfo());

        String sn = DiskUtils.getSerialNumber("C");
        System.out.println("***硬盘编号***");
        System.out.println(sn);

        System.out.println(getMotherboardSN());

    }


}
