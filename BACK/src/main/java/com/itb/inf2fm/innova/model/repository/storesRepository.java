package com.itb.inf2fm.innova.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.itb.inf2fm.innova.model.entity.stores;
@Repository
public interface storesRepository extends JpaRepository<stores, Long> {
       

        // Buscar por nome
        List<stores> findByName(String name);
          
        // Buscar bazares com avaliação mínima
        @Query("SELECT b FROM stores b WHERE b.avaliacao >= :avaliacao = true ORDER BY b.avaliacao DESC")
        List<stores> findByAvaliacaoMinima(@Param("avaliacao") Double avaliacao);
        
        // Buscar bazares mais bem avaliados
        @Query("SELECT b FROM stores = true ORDER BY b.avaliacao DESC, b.total_avaliacoes DESC")
        List<stores> findTopRated();

         // Buscar por cidade
        List<stores> findByCidade(String cidade);
    
}