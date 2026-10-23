# Por Dentro do Computador

Curso interativo em português do Brasil para aprender **fundamentos da computação** e chegar à **programação prática em JavaScript** sem exigir conhecimento prévio ou inglês fluente.

![Visão geral — Por Dentro do Computador](docs/screenshots/desktop.png)

---

## Como usar

### Opção 1 — Servidor local (Recomendado)

Rodar um servidor local permite que o navegador salve seu progresso automaticamente (`localStorage`) e garante funcionamento completo do Web Worker no laboratório de código:

```bash
# Clone o repositório
git clone https://github.com/erickhypertrophy/programa-oestudos.git
cd programa-oestudos

# Inicie o servidor local com Python 3 (ou `npm start`)
python3 -m http.server 8000
```

Depois, abra **`http://127.0.0.1:8000`** no navegador. Para encerrar o servidor quando terminar de estudar, pressione `Ctrl+C` no terminal.

### Opção 2 — Abrir com duplo clique (Arquivo Único Offline)

Se preferir usar sem terminal e sem servidor:

1. Baixe ou abra diretamente o arquivo **[`Por-Dentro-do-Computador.html`](Por-Dentro-do-Computador.html)**.
2. Ele incorpora todo o curso, estilos e scripts em um único arquivo `.html` independente e funciona 100% offline.
3. **Atenção ao progresso em `file://`:** alguns navegadores restringem o salvamento automático em arquivos abertos diretamente por duplo clique. Nesse modo, antes de fechar a aba, vá em **Meu progresso → Exportar meu progresso (.json)** e importe o arquivo `.json` na próxima sessão.

---

## Trilha de Aprendizagem (13 Fases · 39 Lições)

| Fase | Título | Foco Principal | Duração Estimada |
| :---: | :--- | :--- | :---: |
| **01** | **Pensar como um computador** | Entrada, transformação, saída, algoritmos, estado e abstração | 45–60 min |
| **02** | **Bits e números binários** | Bit, sistema binário (base 2), conversões, largura fixa e *overflow* | 60–75 min |
| **03** | **Como bits viram informação** | Valor vs. representação, hexadecimal, ASCII, Unicode e UTF-8 | 55–70 min |
| **04** | **Lógica e portas** | Álgebra booleana, `AND`, `OR`, `NOT`, `XOR`, tabelas-verdade e portas | 60–75 min |
| **05** | **Circuitos que combinam** | Composição de portas, universalidade da `NAND`, multiplexador e estado | 65–80 min |
| **06** | **Como o computador soma** | Meio-somador, somador completo, transporte (*carry*) e complemento de dois | 65–80 min |
| **07** | **Memória e tempo** | Endereço vs. conteúdo, latch, flip-flop, registrador, *clock*, RAM e SSD | 60–75 min |
| **08** | **Dentro da CPU** | ALU, unidade de controle, contador de programa (PC) e ciclo de instrução | 70–90 min |
| **09** | **Do código à execução** | Código-fonte, compilador/interpretador, motor JS, navegador e SO | 60–75 min |
| **10** | **Primeiro código de verdade** | JavaScript: variáveis (`const`/`let`), tipos de dados e funções (`return`) | 75–100 min |
| **11** | **Decisões e repetição** | Condicionais (`if`/`else`), laços (`for`/`while`) e rastreamento (*debugging*) | 70–90 min |
| **12** | **Dados, testes e eficiência** | Arrays, casos de teste, casos de borda e noção intuitiva de *Big O* | 75–100 min |
| **13** | **Projeto final: construa e explique** | Especificação, implementação e teste de uma calculadora binária de 8 bits | 2–4 horas |

---

## Estrutura do Repositório

```text
programa-oestudos/
├── index.html                        # Entrada principal (versão modular)
├── styles.css                        # Estilos visuais e responsividade
├── data.js                           # Conteúdo autoral das 13 fases (39 lições) e glossário (41 termos)
├── app.js                            # Lógica da aplicação, laboratórios, quizzes, revisão espaçada e Worker JS
├── Por-Dentro-do-Computador.html     # Versão standalone em arquivo único (gerada a partir dos arquivos modulares)
├── package.json                      # Scripts utilitários (sem dependências externas)
├── scripts/
│   └── build-singlefile.mjs          # Gera e verifica o arquivo único Por-Dentro-do-Computador.html
├── tests/
│   └── verify.mjs                    # Suíte automatizada de testes (conteúdo, 3.250 ciclos de quiz, CPU e DOM)
└── docs/
    ├── AVALIACAO-PEDAGOGICA.md       # Avaliação crítica do material, notas por critério e guia de estudo
    ├── AUDITORIA.md                  # Auditoria técnica, histórico dos protótipos, simplificações e fontes
    └── screenshots/
        └── desktop.png               # Captura de tela da visão geral
```

---

## Desenvolvimento, Build e Testes

O projeto não utiliza dependências externas (`node_modules`). Caso edite qualquer arquivo modular (`index.html`, `styles.css`, `data.js` ou `app.js`), atualize o pacote de arquivo único e rode a suíte de verificação com Node.js (v18+):

```bash
# Regerar Por-Dentro-do-Computador.html a partir dos arquivos modulares
npm run build

# Verificar se Por-Dentro-do-Computador.html está sincronizado
npm run check

# Executar a suíte completa de testes automatizados
npm test
```

---

## Documentação e Avaliação do Material

- **[Avaliação Pedagógica e Guia de Estudo (`docs/AVALIACAO-PEDAGOGICA.md`)](docs/AVALIACAO-PEDAGOGICA.md)**: análise sincera com notas por critério, pontos fortes, limitações reais do material e como estudar por ele sem cair em armadilhas.
- **[Auditoria Técnica e Fontes (`docs/AUDITORIA.md`)](docs/AUDITORIA.md)**: histórico de consolidação dos protótipos, decisões conceituais, referências bibliográficas (Nand2Tetris, CS50, CS:APP, MDN, Dunlosky et al.) e escopo dos testes.

---

## Segurança do Laboratório de Código

O laboratório executa o código de exercício em um Web Worker separado, com limite de tempo (1,6 s) e bloqueio de APIs comuns de rede no escopo de execução. Trata-se de uma barreira didática, não de um sandbox de segurança certificado: execute apenas código que você mesmo escreveu e compreende.
