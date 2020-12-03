package com.example.demo.repository;

import com.example.demo.entities.Nid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INidRepository extends JpaRepository<Nid, Long> {

  Nid findByNid(String nid);
}
