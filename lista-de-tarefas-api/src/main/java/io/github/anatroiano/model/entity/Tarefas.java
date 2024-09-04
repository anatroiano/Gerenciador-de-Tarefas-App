package io.github.anatroiano.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Data
public class Tarefas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    @NotEmpty(message = "O campo Título é obrigatório.")
    private String titulo;

    @Column(nullable = false)
    @NotEmpty(message = "O campo Descrição é obrigatório.")
    private String descricao;

    @Column(nullable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    @NotNull(message = "O campo Data de Vendimento é obrigatório.")
    private LocalDate dataConcluir;

    @Column
    private Boolean concluida;
}
