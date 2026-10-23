# Auditoria do material — Por Dentro do Computador

## Resumo honesto dos dois projetos de entrada

**ZIP 1 — interactive-computing-fundamentals-game.zip.** A estrutura React + TypeScript é pequena e o arquivo `courseData.ts` contém muito material introdutório; o componente de exercícios tem variedade de interação e há um armazenamento de progresso separado. O ponto forte é ser uma base direta para aprender um conceito por vez. O limite é a distância entre exercícios isolados e uma explicação contínua do caminho que liga representação, circuito, memória, instrução e programa. A interface e a estrutura da lição também não criam, por si só, a ponte para escrever e executar código comum.

**ZIP 2 — interactive-computing-fundamentals-game (1).zip.** Tem uma separação de conteúdo mais modular (fases 0–7), demonstrações de lógica e arquitetura, construtor de circuitos e scripts de verificação. Isso é melhor como esqueleto de um currículo que progride de portas a sistemas. Mas mais arquivos, fases e questões não garantem que um iniciante consiga construir o modelo mental completo. Verificações presentes no ZIP são intenções automatizadas, não prova de que foram executadas naquele ambiente; tampouco substituem verificação conceitual e observação visual.

**Decisão:** não tentei tirar uma média dos dois. A versão final foi feita como aplicação pequena sem cadeia de dependências para instalar, com curso, laboratórios e progresso integrados. Reaproveita a progressão didática de lógica/circuitos/CPU, mas reorganiza a trilha até chegar a JavaScript, testes e projeto final. Não é uma tradução literal de nenhum dos ZIPs.

## Mapa da versão final

1. Pensar como um computador: instruções explícitas, entradas, saídas e algoritmos.
2. Informação e representação: bit, byte, binário e conversões.
3. Números, texto e codificação: limites e diferença entre valor, representação e unidade.
4. Lógica booleana: verdadeiro/falso e operadores.
5. Portas e circuitos combinacionais: NOT, AND, OR, XOR, NAND e seleção de entradas.
6. Aritmética digital: somadores, transporte, largura fixa e complemento de dois.
7. Memória e estado: endereço/conteúdo, registradores, RAM e armazenamento persistente.
8. Instruções e ciclo da máquina: busca, decodificação, execução e contador de programa num modelo reduzido.
9. Montagem de um programa didático: registradores, operações, armazenamento e parada.
10. Como código chega à execução: código-fonte, tradutores, motor de linguagem e sistema hospedeiro.
11. JavaScript I: valores, variáveis, tipos, operadores e previsões.
12. JavaScript II: condições, repetição, funções, retorno, erros e testes.
13. Projeto de síntese: calculadora binária de 8 bits com limites e validação.

Cada fase contém três lições. O banco de questões gera instâncias com dados variáveis e feedback por alternativa. O fluxo de domínio pede concluir as lições, acertar uma fração mínima de quatro questões e registrar uma explicação; isso é uma regra prática, não um teste científico da compreensão.

## Correções conceituais importantes incorporadas

- **NAND universal não significa “uma NAND sozinha é um computador”.** A propriedade diz que NANDs conectadas adequadamente podem realizar qualquer função booleana combinacional. Memória, estado, temporização, instruções e entrada/saída precisam de construção adicional.
- **O modelo de CPU é fictício e deliberadamente menor do que um processador comercial.** Seu conjunto de instruções simplificado serve para acompanhar estados. Não reproduz cache, pipeline, exceções, previsão de desvios, sistema de interrupções ou todos os detalhes físicos.
- **JavaScript não vira uma porta lógica específica por linha.** O programa passa por um ambiente de execução e um motor de linguagem. Motores reais podem interpretar e compilar dinamicamente, e suas estratégias variam.
- **`&` e `&&` em JavaScript não são intercambiáveis.** `&` é AND bit a bit com conversões de inteiros de 32 bits; `&&` é AND lógico e pode devolver um dos operandos.
- **Aritmética de largura fixa descarta informação se não houver espaço para o transporte.** `255 + 1` precisa de 9 bits para representar 256 sem sinal. Se guardar só 8 bits, sobra `00000000`, uma operação módulo 256.
- **Byte costuma significar 8 bits nos computadores modernos abordados**, mas o curso identifica esse pressuposto como convenção do modelo, não uma lei lógica universal da física.
- **Revisão espaçada e teste de recuperação ajudam, não garantem aprendizagem.** Notas e caixas de seleção acompanham ações observáveis, não medem perfeitamente entendimento ou retenção.

## Fontes técnicas e pedagógicas

- Nisan, Noam; Schocken, Shimon. *The Elements of Computing Systems* / Nand2Tetris. Progressão por projetos de lógica, memória, arquitetura, linguagem de máquina, montador, máquina virtual, compilador e sistema operacional: https://www.nand2tetris.org/ e https://www.nand2tetris.org/course
- Harvard CS50: problemas sem e com código, pensamento algorítmico, correção, representação, C e outros níveis de linguagem, além de projeto final: https://cs50.harvard.edu/college/ e https://cs50.harvard.edu/x/
- Bryant e O'Hallaron, *Computer Systems: A Programmer's Perspective*: perspectiva da execução do ponto de vista de quem programa, incluindo representação, código de máquina, arquitetura e memória: https://csapp.cs.cmu.edu/3e/perspective.html
- MDN Web Docs, *Modelo de execução JavaScript*: ambiente hospedeiro, pilha de chamadas e tarefas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Execution_model
- Dunlosky et al. (2013), “Improving Students’ Learning With Effective Learning Techniques”: revisão de prática de recuperação e prática distribuída: https://doi.org/10.1177/1529100612453266
- Institute of Education Sciences / What Works Clearinghouse, guia sobre estudo e instrução: https://ies.ed.gov/ncee/wwc/PracticeGuide/1
- Unicode Consortium, FAQ sobre codificações Unicode: https://www.unicode.org/faq/utf_bom.html

As referências são fontes para orientar decisões e estudos adicionais; não significam endosso deste aplicativo. O curso usa modelos próprios simplificados e não substitui os cursos/projetos completos das fontes.

## Relatório dos testes

Executado com Node.js 22, sem instalar dependências externas:

- `node tests/verify.mjs`: PASS.
- Verificou existência de 13 fases, 39 lições e glossário com ao menos 40 termos.
- Gerou 250 bancos por fase (3.250 ciclos de geração), verificando enunciado, explicação, alternativas corretas únicas e feedback por alternativa.
- Verificou composição dos quizzes por fase, conversão decimal/binário, representação com largura fixa e execução da CPU didática até `A = 6`, `memória[0] = 8` e `HALT`.
- Fez verificações de renderização com DOM simulado; isso não prova compatibilidade completa de navegador.
- Foram geradas capturas de tela de uma execução em desktop e celular no ambiente de trabalho. A primeira inspeção de celular mostrou a grade do laboratório estreita; uma regra CSS adicional foi aplicada para forçar uma coluna em telas até 850 px. Essa regra está no pacote final, mas não consegui confirmar uma nova captura após o ajuste.
- No teste de navegador ocorreu um erro real no laboratório ao tentar sobrescrever propriedade de navegador somente de leitura; o isolamento foi corrigido para passar APIs como parâmetros locais. O exemplo de dinheiro foi escrito com `.toFixed(1)` para evitar a exibição do artefato de ponto flutuante `59.699999999999996`.

**O que não está comprovado:** não há build React/Vite porque esta versão final é uma aplicação independente em HTML, CSS e JavaScript, sem dependências de instalação. Não foi feita uma suíte completa de automação ponta a ponta para cada clique em cada tela nem teste em vários navegadores/sistemas. Persistência automática sob `file://` não é garantida; por isso o método recomendado é o servidor local. O laboratório reduz acesso do código de exercício, mas não pode ser descrito como um sandbox seguro para executar código desconhecido.
