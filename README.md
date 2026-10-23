# Por Dentro do Computador

Curso interativo em português do Brasil para aprender fundamentos da computação e chegar à programação prática sem exigir conhecimento prévio ou inglês fluente.

## Comece sem instalar nada (recomendado)

1. Baixe e extraia `Por-Dentro-do-Computador.zip` para uma pasta do seu computador.
2. Abra a pasta extraída.
3. No Linux Mint, abra o terminal nessa pasta (clique com o botão direito no espaço vazio e procure **Abrir no terminal**).
4. Digite `python3 -m http.server 8000` e aperte Enter. Esse comando inicia um servidor somente no seu computador; não instala programa nem publica seu conteúdo na internet.
5. Abra o navegador e acesse `http://127.0.0.1:8000`.
6. Para encerrar quando terminar, volte ao terminal e aperte `Ctrl+C`.

O servidor local é a opção recomendada: permite ao navegador guardar o progresso automaticamente no armazenamento local. Não feche o terminal enquanto estiver estudando.

## Abrir com duplo clique

Abra `Por-Dentro-do-Computador.html`. O arquivo único incorpora o curso, o estilo visual e os exercícios e não precisa de internet. Por restrições de alguns navegadores ao protocolo `file://`, o salvamento automático pode não funcionar nessa modalidade. Nesse caso, vá a **Meu progresso → Exportar meu progresso (.json)** antes de fechar, e importe o JSON depois. O editor usa um Worker do navegador quando suportado; caso a política do navegador bloqueie o Worker, use o servidor local.

## Estrutura do pacote

- `index.html`, `styles.css`, `data.js`, `app.js`: versão editável em arquivos separados.
- `Por-Dentro-do-Computador.html`: versão independente para abrir com duplo clique.
- `tests/verify.mjs`: testes de conteúdo, geração de questões, CPU didática e renderização simulada.
- `AUDITORIA.md`: resumo comparativo, decisões pedagógicas, simplificações e estado dos testes.

## Progresso e uso

O curso tem 13 fases e 39 lições. As fases são desbloqueadas sequencialmente; cada uma pede lições, uma avaliação e uma explicação com suas palavras. Isso não é uma medição objetiva perfeita de domínio: use a autoexplicação, resolva problemas novos sem consultar a resposta e reveja o tema dias depois. Exporte JSON regularmente para fazer cópia de segurança. A importação foi pensada para arquivos de progresso deste curso; não importe arquivos desconhecidos.

## Segurança do laboratório

O laboratório separa o código de exercício em um Worker e bloqueia APIs comuns de rede no contexto de execução. É uma barreira didática, não um sandbox certificado nem proteção contra todo código malicioso. Execute somente o código que você entende ou escreveu; não cole código desconhecido.

## Requisitos

- Para abrir o HTML isolado: navegador moderno.
- Para modo recomendado local: navegador moderno e Python 3, normalmente já disponível no Linux Mint. Não é necessário npm, React, Vite ou baixar bibliotecas.
