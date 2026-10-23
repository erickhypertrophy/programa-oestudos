# Plano de estudo: de iniciante absoluto a competência independente

Este plano não é um cronômetro nem uma promessa de “ficar avançado” em um número fixo de dias. É uma sequência de evidências de aprendizagem. Só avance quando conseguir fazer algo sem copiar o exemplo.

## Ciclo de uma sessão

1. **Recupere:** antes de reler, escreva três coisas que lembra da última sessão e uma dúvida.
2. **Estude uma lição:** defina os termos técnicos novos e identifique a regra principal.
3. **Preveja:** antes de executar o laboratório, escreva o resultado que espera e a razão.
4. **Execute:** compare previsão e resultado. Se divergir, localize a primeira etapa em que a previsão falhou.
5. **Explique:** feche a página e explique a ideia em português simples; depois adicione os termos técnicos.
6. **Transfira:** mude os dados ou crie um exemplo próprio que não apareceu na explicação.
7. **Agende a revisão:** repita em dias diferentes. Não use a memória imediata de ter acabado de ler como prova de retenção.

## Portas de domínio por blocos

### Bloco 1 — fases 1–13: a máquina e o primeiro programa

**Evidência exigida:** converter números com e sem largura fixa, explicar Unicode/UTF-8 sem confundi-los, montar tabelas-verdade, explicar por que uma CPU precisa de estado e instruções, e terminar uma calculadora binária com entradas validadas e casos-limite.

**Não avance só porque reconhece palavras.** Deve conseguir reconstruir um exemplo em folha de papel e explicar onde o modelo é simplificado.

### Bloco 2 — fases 14–19: código, algoritmos e ferramentas

**Evidência exigida:** transformar arrays e objetos sem mutações acidentais, escolher busca de acordo com os dados, explicar a ordem de crescimento de um algoritmo, implementar uma pilha/fila simples, corrigir um bug reproduzível, escrever testes de limite e registrar uma mudança pequena com Git.

**Projeto:** gerenciador de tarefas simples com adicionar, concluir, filtrar e exportar dados; inclua pelo menos oito testes e um README de execução.

### Bloco 3 — fases 20–24: web de ponta a ponta

**Evidência exigida:** criar uma página semântica operável por teclado, layout responsivo, formulário com estados de erro/sucesso, interação via DOM, e uma requisição HTTP com tratamento de erro e validação do JSON.

**Projeto:** página que consome uma fonte de dados pública ou um conjunto local, exibe carregamento/erro/sucesso, permite filtrar e funciona em tela estreita sem depender só de cor.

### Bloco 4 — fases 25–30: aplicações e engenharia

**Evidência exigida:** modularizar regras, modelar tabelas e relações, escrever consultas SQL com filtros e agregação, criar uma rota de servidor didática, validar dados no servidor, explicar autenticação versus autorização e proteger dados de entrada, aplicar tipos sem confundir tipo estático com validação de runtime, e refatorar sem mudar o contrato.

**Projeto:** API de produtos e pedidos com persistência local, restrições de banco, tratamento explícito de erros, testes de rota, política de permissão e documentação.

### Bloco 5 — fases 31–35: sistema, redes e algoritmo

**Evidência exigida:** desenhar endereços e conteúdos sem confundi-los, explicar duração de vida e riscos de ponteiros, mostrar um intercalamento que provoca corrida, distinguir TCP de HTTP e TLS, estimar operações antes de medir, identificar quando guloso falha e construir uma solução dinâmica para o mesmo problema pequeno.

**Projeto:** escolha um componente do bloco anterior e escreva uma investigação de desempenho com hipótese, método, dados, limites e mudança justificada.

### Bloco 6 — fase 36: projeto de portfólio

Escolha um problema real e escreva requisitos com critérios de aceitação. Faça uma fatia vertical que passa por entrada, validação, regra de negócio, persistência e resultado. Depois acrescente teste, segurança, acessibilidade e documentação. Faça outra pessoa executar seguindo seu README. Registre bugs e limitações honestamente.

## Critérios de “estou pronto para o próximo assunto?”

- Consigo explicar o conceito sem ler a definição?
- Consigo prever a saída para uma entrada nova?
- Consigo produzir ao menos um contraexemplo ou caso-limite?
- Consigo escrever código correspondente sem copiar linha por linha?
- Consigo testar o comportamento e explicar uma falha?
- Sei onde a explicação simplifica a realidade?

Se não, volte ao exemplo; isso não é fracasso, é informação útil sobre o que ainda precisa de prática.

## Como calibrar a ambição

“Avançado” depende da área e do tipo de trabalho. Este curso oferece fundamentos e um primeiro mapa profissional, mas não substitui a profundidade de um curso universitário completo, centenas de problemas, leitura de código real nem experiência de manutenção. Depois de construir dois ou três projetos completos, escolha uma especialização — por exemplo, desenvolvimento web, sistemas, dados, segurança ou algoritmos — e continue com materiais especializados, problemas originais e revisão externa do código.
