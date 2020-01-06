package com.qingyun.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.qingyun.entity.BRoad;

@Repository
public interface RoadDao {

	List<BRoad> getRoadFileNameList();

	List<BRoad> getRoadList(@Param("fileName")String fileName);

	void save(@Param("roadList")List<BRoad> roadList);

}
