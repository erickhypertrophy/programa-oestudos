# Auditoria Técnica e Histórico — Por Dentro do Computador

## Resumo dos dois protótipos de entrada (histórico)

Antes da consolidação na versão oficial **`Por Dentro do Computador`**, existiam dois protótipos em React + TypeScript + Vite que serviram de insumo:

1. **Protótipo 1 (`interactive-computing-fundamentals-game.zip`)**:
   - Estrutura em React + TypeScript com o conteúdo concentrado em `src/courseData.ts` (8 fases, ~15 mil palavras) e diagramas SVG de portas lógicas e meio-somador (`GateSVG.tsx`, `HalfAdderSVG.tsx`).
   - **Ponto forte**: abordagem direta para aprender um conceito por vez na base de lógica digital.
   - **Limite**: parava no somador de 2 bits / ponte conceitual, sem chegar a um laboratório de programação real em que o aluno escreva e execute código.

2. **Protótipo 2 (`interactive-computing-fundamentals-game (1).zip` — *"BITS: a fundação de tudo"*)**:
   - Estrutura modular em 8 fases (`src/content/phase0.ts` a `phase7.ts`, ~40 mil palavras), 16 laboratórios interativos de hardware (`Demos.tsx`), construtor de circuitos em mini-HDL (`CircuitBuilder.tsx`), 183 exercícios de 7 tipos e scripts de verificação.
   - **Ponto forte**: excelente profundidade narrativa e interativa para a camada física/lógica (do bit até uma CPU mínima de von Neumann de 8 bits).
   - **Limite**: exigia ambiente Node.js/Vite para desenvolvimento e encerrava na Fase 7 (CPU), sem cobrir a transição prática para escrever código em uma linguagem de programação real (variáveis, tipos, funções, condições, laços, arrays, testes e projeto).

**Decisão da versão oficial (`Por Dentro do Computador`)**:
Construir uma aplicação web independente em HTML, CSS e JavaScript puros (zero dependências externas para rodar), cobrindo uma trilha contínua de **13 fases (39 lições)** que vai do pensamento computacional e bits até JavaScript executável em Web Worker, testes e projeto final, além de fornecer tanto os arquivos-fonte modulares (`index.html`, `styles.css`, `data.js`, `app.js`) quanto o pacote único (`Por-Dentro-do-Computador.html`).

---

## Mapa real das 13 fases (`data.js`)

1. **Fase 01 — Pensar como um computador** (*Pensamento computacional*): instruções explícitas, entrada/transformação/saída, algoritmos, estado, modelo e abstração.
2. **Fase 02 — Bits e números binários** (*Representação numérica*): bit como escolha entre dois estados, leitura e conversão decimal ↔ binário, largura fixa, intervalo e estouro.
3. **Fase 03 — Como bits viram informação** (*Texto, cor e codificação*): diferença entre valor e representação, hexadecimal, caracteres, Unicode e UTF-8.
4. **Fase 04 — Lógica e portas** (*Lógica booleana*): verdadeiro/falso, AND, OR, NOT, XOR, tabelas-verdade e portas lógicas.
5. **Fase 05 — Circuitos que combinam** (*Composição e seleção*): composição de portas, universalidade da porta NAND e diferença entre circuito combinacional e estado.
6. **Fase 06 — Como o computador soma** (*Aritmética em bits*): meio-somador/somador completo, transporte (*carry*), números negativos em complemento de dois e *overflow*.
7. **Fase 07 — Memória e tempo** (*Guardar estado*): endereço vs. conteúdo, latch, flip-flop, registrador, *clock* e hierarquia de memória (RAM, cache, armazenamento persistente).
8. **Fase 08 — Dentro da CPU** (*Processador e instruções*): blocos da CPU (ALU, unidade de controle, registradores, contador de programa), ciclo busca-decodifica-executa e conjunto de instruções.
9. **Fase 09 — Do código à execução** (*Compilador, runtime e sistema operacional*): código-fonte vs. instrução de máquina, compilação e interpretação, motor JavaScript, ambiente hospedeiro e sistema operacional.
10. **Fase 10 — Primeiro código de verdade** (*Variáveis, valores e funções*): `const`, `let`, tipos de dados (número vs. texto), parâmetros, `return` e `console.log`.
11. **Fase 11 — Decisões e repetição** (*Fluxo de execução*): condicionais (`if`/`else`), operadores lógicos e de comparação, laços (`for`/`while`), condição de parada e rastreamento de estado (*debugging*).
12. **Fase 12 — Dados, testes e eficiência** (*Construir com confiança*): coleções (`Array`), casos de teste (incluindo casos de borda) e noção intuitiva de complexidade assintótica (*Big O*).
13. **Fase 13 — Projeto final: construa e explique** (*Integração e próximos passos*): especificação, implementação e testes de uma calculadora binária de 8 bits, e roteiro de estudos posteriores.

---

## Correções conceituais importantes incorporadas

- **NAND universal não significa "uma NAND sozinha é um computador".** A propriedade diz que portas NAND conectadas adequadamente podem realizar qualquer função booleana combinacional finita. Memória, estado, temporização, instruções e entrada/saída exigem construção adicional.
- **O modelo de CPU é fictício e deliberadamente menor do que um processador comercial.** Seu conjunto de instruções simplificado (`SET`, `ADD`, `SUB`, `STORE`, `HALT`) serve para acompanhar estados passo a passo. Não reproduz cache, pipeline, exceções, previsão de desvios ou interrupções.
- **JavaScript não vira uma porta lógica específica por linha.** O programa passa por um ambiente de execução e um motor de linguagem (que pode combinar interpretação e compilação JIT).
- **`&` e `&&` em JavaScript não são intercambiáveis.** `&` é AND bit a bit com conversão para inteiros de 32 bits; `&&` é AND lógico com avaliação de curto-circuito e retorna um dos operandos.
- **Aritmética de largura fixa descarta informação se não houver espaço para o transporte.** `255 + 1` precisa de 9 bits para representar 256 sem sinal; em 8 bits sem sinal resulta em `00000000` (aritmética módulo 256).
- **Unicode vs. UTF-8:** Unicode atribui pontos de código (`U+...`) a caracteres; UTF-8 codifica esses pontos de código em sequências de 1 a 4 bytes.

---

## Fontes técnicas e pedagógicas

- Nisan, Noam; Schocken, Shimon. *The Elements of Computing Systems* / Nand2Tetris: https://www.nand2tetris.org/
- Harvard CS50 — *Introduction to Computer Science*: https://cs50.harvard.edu/x/
- Bryant, Randal E.; O'Hallaron, David R. *Computer Systems: A Programmer's Perspective*: https://csapp.cs.cmu.edu/3e/perspective.html
- MDN Web Docs — *Modelo de execução JavaScript*: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Execution_model
- Dunlosky et al. (2013), *"Improving Students' Learning With Effective Learning Techniques"*: https://doi.org/10.1177/1529100612453266
- Institute of Education Sciences / What Works Clearinghouse, *Organizing Instruction and Study to Improve Student Learning*: https://ies.ed.gov/ncee/wwc/PracticeGuide/1
- Unicode Consortium, *UTF-8, UTF-16, UTF-32 & BOM FAQ*: https://www.unicode.org/faq/utf_bom.html

---

## Relatório de verificação automatizada

Executado via `npm test` (`node tests/verify.mjs`) e `npm run check` (`node scripts/build-singlefile.mjs --check`), sem dependências externas:

- Verifica sincronização exata entre os arquivos modulares (`index.html`, `styles.css`, `data.js`, `app.js`) e o arquivo único `Por-Dentro-do-Computador.html`.
- Verifica existência de 13 fases, 39 lições e glossário com 41 termos.
- Executa 250 ciclos de geração do banco de questões por fase (3.250 ciclos no total), validando enunciado, alternativa correta única, ausência de alternativas duplicadas e presença de feedback específico por alternativa.
- Verifica conversão decimal/binário com largura fixa e execução da mini-CPU até `A = 6`, `memória[0] = 8` e `HALT`.
- Verifica renderização inicial e navegação básica com DOM simulado.
