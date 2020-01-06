package com.qingyun.utils;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.IvParameterSpec;

/**
 * 授权加密解密工具类，做成授权工具的话，主要就是用的这个类
 */
public class DESUtils {
	/**
	 * 密钥
	 */
	public static final String DEFAULT_KEY = "BOTWAVEE";



	public static String decrypt(String message) throws Exception {
		return java.net.URLDecoder.decode(decrypt(message, DEFAULT_KEY), "utf-8");
	}

	/**
	 * 解密
	 * @param message 加密后的内容
	 * @param key 密钥
	 * @return
	 * @throws Exception
	 */
	public static String decrypt(String message, String key) throws Exception {

		byte[] bytesrc = convertHexString(message);
		Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
		DESKeySpec desKeySpec = new DESKeySpec(key.getBytes("UTF-8"));
		SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
		SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
		IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));

		cipher.init(Cipher.DECRYPT_MODE, secretKey, iv);

		byte[] retByte = cipher.doFinal(bytesrc);
		return new String(retByte);
	}


	public static String encrypt(String message) throws Exception{

		return toHexString(encrypt(message, DEFAULT_KEY)).toUpperCase();
	}

	/**
	 * 加密
	 * 
	 * @param message
	 * @param key
	 * @return
	 * @throws Exception
	 */
	public static byte[] encrypt(String message, String key) throws Exception {
		Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");

		DESKeySpec desKeySpec = new DESKeySpec(key.getBytes("UTF-8"));

		SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
		SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
		IvParameterSpec iv = new IvParameterSpec(key.getBytes("UTF-8"));
		cipher.init(Cipher.ENCRYPT_MODE, secretKey, iv);

		return cipher.doFinal(message.getBytes("UTF-8"));
	}

	public static byte[] convertHexString(String ss) {
		byte digest[] = new byte[ss.length() / 2];
		for (int i = 0; i < digest.length; i++) {
			String byteString = ss.substring(2 * i, 2 * i + 2);
			int byteValue = Integer.parseInt(byteString, 16);
			digest[i] = (byte) byteValue;
		}

		return digest;
	}

	public static void main(String[] args) throws Exception {
		String key = "BOTWAVEE";
		String jiami = "znxd,000000,7005-459C,2018-07-27,2022-02-02";


		System.out.println("加密数据:" + jiami);
		String a = encrypt(jiami);
		System.out.println("加密后的数据为:" + a);
		
		String b =decrypt(a);
		System.out.println("解密后的数据:" + b);

	}

	public static String toHexString(byte b[]) {
		StringBuffer hexString = new StringBuffer();
		for (int i = 0; i < b.length; i++) {
			String plainText = Integer.toHexString(0xff & b[i]);
			if (plainText.length() < 2)
				plainText = "0" + plainText;
			hexString.append(plainText);
		}

		return hexString.toString();
	}
}