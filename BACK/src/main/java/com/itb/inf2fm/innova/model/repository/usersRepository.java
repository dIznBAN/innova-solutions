package com.itb.inf2fm.innova.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.itb.inf2fm.innova.model.entity.users;

@Repository
public interface usersRepository extends JpaRepository<users, Long> {
    users findByEmail(String email);
    boolean existsByEmail(String email);
}
