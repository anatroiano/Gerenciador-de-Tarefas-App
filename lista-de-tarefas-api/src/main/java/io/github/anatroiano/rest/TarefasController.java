package io.github.anatroiano.rest;

import io.github.anatroiano.model.entity.Tarefas;
import io.github.anatroiano.model.repository.TarefasRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tarefas")
@RequiredArgsConstructor
@CrossOrigin("*")
public class TarefasController {

    private final TarefasRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Tarefas criar(@RequestBody @Valid Tarefas tarefas) {
        return repository.save(tarefas);
    }

    @GetMapping
    public List<Tarefas> obterTodas() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    public Tarefas getTarefaById(@PathVariable Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tarefa não encontrada."));
    }

    @PatchMapping("{id}/concluida")
    public void marcarConcluida(@PathVariable Integer id) {
        Optional<Tarefas> tarefas = repository.findById(id);

        tarefas.ifPresent(
             t -> {
                boolean concluida = t.getConcluida();
                t.setConcluida(!concluida);
                repository.save(t);
            });
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarPorId(@PathVariable Integer id) {
        repository.findById(id).map(
            tarefas -> {
                repository.delete(tarefas);
                return Void.TYPE;
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tarefa não encontrada."));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editar(@PathVariable Integer id, @RequestBody Tarefas tarefaEditada) {
        repository.findById(id).map(
            tarefas -> {
                tarefas.setTitulo(tarefaEditada.getTitulo());
                tarefas.setDescricao(tarefaEditada.getDescricao());
                tarefas.setDataConcluir(tarefaEditada.getDataConcluir());
                return repository.save(tarefas);
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tarefa não encontrada."));
    }

}