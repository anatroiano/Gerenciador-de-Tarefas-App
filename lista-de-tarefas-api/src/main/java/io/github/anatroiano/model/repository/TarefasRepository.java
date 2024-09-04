package io.github.anatroiano.model.repository;

import io.github.anatroiano.model.entity.Tarefas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefasRepository extends JpaRepository<Tarefas, Integer> {

}