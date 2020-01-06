package com.qingyun;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

/**
 * @Description 程序启动类
 * @author 张立增
 * @Date 2020年1月3日 下午7:56:27
 */
@ServletComponentScan
@SpringBootApplication
@ComponentScan(basePackages ={"com.qingyun"})
@MapperScan("com.qingyun.dao")
public class StartApplication extends SpringBootServletInitializer{
  
	public static void main( String[] args )
   {
		 SpringApplication.run(StartApplication.class, args);
   }
	
	//springboot项目打包
	@Override
   protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
       return builder.sources(this.getClass());
   }
}
