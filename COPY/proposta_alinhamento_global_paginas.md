# Proposta de Alinhamento Global: Todas as Páginas do Site Ventra

> [!IMPORTANT]
> **Aviso de Governança (Regra para Revisões):** Esta proposta apresenta o descritivo estrutural e as melhorias para unificar todas as páginas do site da Ventra (`index.html`, `sobre.html`, `contato.html`) na mesma lógica de segmentação e *Design for Business* aplicada em `servicos.html`.
> **Nenhuma linha de código foi modificada nesta etapa.** A aplicação em código será executada somente após sua aprovação formal.

---

## 1. Diagnóstico e Objetivo do Alinhamento Global

Após a reestruturação da página [servicos.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/servicos.html) com o modelo de segmentação por públicos da Bounce Produtora (Agências/B2B, Empresas/PMEs e Sob Demanda), as demais páginas do site ainda utilizam referências genéricas ou desatualizadas.

**O objetivo deste plano é:**
1. **Unificar a Navegação e Header/Footer:** Consistência de links, estados ativos e dados de contato reais/formatados em todas as páginas.
2. **Harmonizar a Home (`index.html`):** Refletir os 3 públicos logo na Home com cards de acesso rápido e substituir a lista técnica antiga pelo posicionamento comercial ("Design for Business").
3. **Alinhar a Página Sobre (`sobre.html`):** Fortalecer o manifesto da transcrição da reunião ("Não somos sobrinho, temos processo e entrega corporativa para fazer o cliente vender mais") e a metodologia de 4 etapas (*Problema -> Decisão -> Solução -> Aplicação*).
4. **Otimizar a Página de Contato (`contato.html`):** Alinhar os 3 seletores de perfil às 3 abas de serviços (1. Agência/Parceiro B2B; 2. Dono de Empresa PME; 3. Projeto Pontual / Embalagem) para que o lead caia no WhatsApp já qualificado.

---

## 2. Descritivo Estrutural Detalhado por Página (Wireframe Seção por Seção)

### 📄 PÁGINA 1: Home (`index.html`)

#### Seção 1: Header
* **Esquerda:** Logo Ventra
* **Centro:** Nav (Home [ativo], Soluções, Sobre, Contato)
* **Direita:** CTA Outline `[ Iniciar Projeto ]` -> leva a `contato.html`

#### Seção 2: Hero Section
* **Badge:** `[ BRANDING & DESIGN FOR BUSINESS ]`
* **H1:** *"Criamos marcas projetadas para vender e crescer."*
* **Lead:** *"Combinamos estratégia comercial e design de alto impacto para que sua empresa pareça do tamanho que realmente é e justifique o valor cobrado."*
* **CTAs:** `[ Conhecer Nossas Soluções ]` (link para `servicos.html`) e `[ Falar no WhatsApp ]`.

#### Seção 3: Seletor Rápido de Soluções na Home (Nova Seção - Refletindo o modelo da Bounce)
* **Objetivo:** Já na Home dar os 3 caminhos diretos para o visitante:
* **Grid de 3 Cards Interativos:**
  * **Card 1:** *Para Agências & Gestores* -> "Seu braço criativo terceirizado para identidades visuais e criativos de tráfego com entrega em 14 dias." `[ Ver modelo B2B → ]`
  * **Card 2:** *Para Empresas & PMEs* -> "Criação e reposicionamento de marca para gerar respeito de mercado e justificar preços." `[ Ver soluções PME → ]`
  * **Card 3:** *Sob Demanda & Embalagens* -> "Design de embalagens para gôndola, Brandbook completo e materiais impressos." `[ Ver projetos sob demanda → ]`

#### Seção 4: Manifesto & Diferencial ("Sobrinho vs. Empresa")
* **Coluna Esquerda:** *"Design que não vende é apenas arte."*
* **Coluna Direita:** Parágrafo extraído do alinhamento da reunião: enquanto o mercado foca em arquivos e conceitos abstratos, a Ventra entrega soluções pensadas no resultado comercial da sua empresa.

#### Seção 5: Processo Comercial (4 Passos)
* **Grid 4 Colunas:**
  * 01. Problema (Imersão no negócio)
  * 02. Decisão (Estratégia e posicionamento)
  * 03. Solução (Design for Business)
  * 04. Aplicação (Continuidade física e digital)

#### Seção 6: Cases com Personalidade
* Grid com 3 cases de destaque cobrindo os 3 perfis (TechFlow, Aura e Café Reserva).

#### Seção 7: Footer Unificado
* Chamada para conversão, links estruturados e WhatsApp corporativo.

---

### 📄 PÁGINA 2: Sobre Nós (`sobre.html`)

#### Seção 1: Header Unificado (Link "Sobre" ativo)
#### Seção 2: Hero Editorial
* **Tagline:** `O ESTÚDIO`
* **H1:** *"Nós somos a Ventra. Onde a estratégia comercial ganha vida através do design."*
* **Mídia:** Imagem/vídeo imersivo do ambiente de trabalho e processo criativo.

#### Seção 3: Manifesto Editorial
* **H2:** *"Mais do que arquivos. Entregamos decisões que geram vendas."*
* **Corpo de texto:**
  * Abordagem direta sobre a dor do empresário que tem um excelente produto mas perde negócios por parecer menor do que é.
  * O compromisso da Ventra em unir rigor de negócios ao design refinado.

#### Seção 4: Metodologia em Z-Pattern (Alinhada à reunião)
* **Passo 01: O Problema (Imersão):** Entendimento real da concorrência e das metas comerciais do cliente.
* **Passo 02: A Decisão (Estratégia):** Definição de tom, público e diferenciação para sustentar preço premium.
* **Passo 03: A Solução (Design for Business):** Criação da identidade, tipografia e grids sem preciosismo que trave a operação.
* **Passo 04: A Aplicação (Continuidade Real):** Acompanhamento do mundo digital até a gráfica/embalagem (evitando que o cliente fique perdido após a entrega).

#### Seção 5: Banner de Convicção & CTA
* Chamada para iniciar o diagnóstico comercial da marca.

---

### 📄 PÁGINA 3: Contato & Triagem (`contato.html`)

#### Seção 1: Header Unificado (Link "Contato" ativo)
#### Seção 2: Split Screen de Triagem Comercial
* **Coluna Esquerda (Dark):**
  * **Tagline:** `QUALIFICAÇÃO & PROPOSTA`
  * **H1:** *"Todo projeto começa com uma conversa de negócio."*
  * **Lead:** *"Diga-nos onde o seu negócio está e onde você quer chegar. Nós desenhamos a ponte visual e estratégica para você alcançar esse resultado."*
  * **Canais Diretos:** E-mail oficial e WhatsApp.
* **Coluna Direita (Formulário Alinhado aos 3 Públicos):**
  * **Campo 1:** Nome / Nome da Empresa
  * **Campo 2:** E-mail Corporativo
  * **Campo 3: Seleção de Perfil (Alinhado exatamente às 3 abas):**
    * `( ) Sou de uma Agência / Gestor de Tráfego (Busco Parceria B2B)`
    * `( ) Sou dono/diretor de Empresa (Quero Reposicionar Minha Marca)`
    * `( ) Tenho um projeto Sob Demanda (Embalagem, Rótulo ou Brandbook)`
  * **Campo 4:** Qual o seu principal desafio ou objetivo comercial hoje?
  * **Botão CTA:** `[ Iniciar Conversa no WhatsApp com a Equipe → ]`
    * Script atualizado no `main.js` para disparar a mensagem para o WhatsApp com a tag do perfil correspondente pré-formatada.

---

## 3. Matriz de Arquivos a Serem Alterados (Após sua Aprovação)

1. [index.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/index.html) -> Reestruturação do Hero, nova seção de 3 soluções rápidas, manifesto atualizado e footer unificado.
2. [sobre.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/sobre.html) -> Refinamento dos textos para "Design for Business", metodologia de 4 passos e footer unificado.
3. [contato.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/contato.html) -> Alinhamento dos campos de triagem aos 3 perfis exatos da Bounce/Ventra.
4. [main.css](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/styles/main.css) -> Ajustes complementares para os cards de soluções na Home e estilização do formulário.
5. [main.js](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/scripts/main.js) -> Atualização do gerador de mensagem do formulário com as 3 tags corretas.
6. [copy_home.md](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/COPY/copy_home.md), [copy_sobre.md](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/COPY/copy_sobre.md), [copy_contato.md](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/COPY/copy_contato.md) -> Sincronização dos arquivos de documentação.

---

## 4. Próximos Passos
Aguardando sua validação:
- Está de acordo com essa proposta para harmonizar todas as páginas (`index.html`, `sobre.html`, `contato.html`)?
- Gostaria de fazer algum ajuste na narrativa ou nos campos antes de executarmos?
