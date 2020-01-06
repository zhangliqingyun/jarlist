package com.qingyun.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by JAVA on 2018/7/24.
 */
public class DateUtils {

    public static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

    public static String currenttime = DateUtils.formatter.format(new Date());

    public static boolean authorize_date(String date){
        if(1 == compare_date(currenttime,date) || 0 == compare_date(currenttime,date)){
            return true;
        }
        return false;
    }


    public static int compare_date(String date1, String date2) {


        DateFormat df = new SimpleDateFormat("yyyy-MM-dd hh:mm");
        try {
            Date dt1 = df.parse(date1);
            Date dt2 = df.parse(date2);
            if (dt1.getTime() > dt2.getTime()) {
//                System.out.println("dt1 在dt2前");
                return 1;
            } else if (dt1.getTime() < dt2.getTime()) {
//                System.out.println("dt1在dt2后");
                return -1;
            } else {
                return 0;
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return 0;
    }
    
    public static boolean compareDate(String startDate, String endDate) {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date dt1 = df.parse(startDate);
            Date dt2 = df.parse(endDate);
            if (dt1.getTime() > dt2.getTime()) {
                return false;
            } else if (dt1.getTime() <= dt2.getTime()) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static Date formatDate(String date) {
    	try {
    		return formatter.parse(date);
		} catch (Exception e) {
			return null;
		}
    }

	public static boolean compareDateFormat(Date startDate, Date endDate) {
		try {
            if (startDate.getTime() > endDate.getTime()) {
                return false;
            } else if (startDate.getTime() <= endDate.getTime()) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
	    return false;
	}
	
	 public static String formatDateStr(Date date) {
	    	try {
	    		return formatter.format(date);
			} catch (Exception e) {
				return null;
			}
	    }

}
