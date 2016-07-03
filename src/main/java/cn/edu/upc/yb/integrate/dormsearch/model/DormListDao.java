package cn.edu.upc.yb.integrate.dormsearch.model;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by skyADMIN on 16/6/27.
 */
public interface DormListDao extends CrudRepository<DormList, Integer> {
    public Iterable<DormList> findByNameAndNumber(String name,String number);
}
