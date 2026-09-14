# Proposta de Ajustes: Wireframe Dark (Sem Fotos), CTA Única e Limpeza de Prazos/Travessões

> [!IMPORTANT]
> **Aviso de Governança (Regra para Revisões):** Este plano descreve a execução dos 4 pontos solicitados pelo usuário para todo o site da Ventra.
> Nenhuma linha de código foi modificada nesta etapa. A aplicação em código será executada após aprovação.

---

## 1. Escopo das 4 Modificações Solicitadas

1. **Remoção Total dos travessões (`—`):**
   - Substituição de todos os travessões (`—`) por dois pontos (`:`), parênteses ou reformulação fluida da frase sem pontuação de interrupção em todas as páginas (`index.html`, `servicos.html`, `sobre.html`, `contato.html`) e documentação.

2. **Remoção Completa de Promessas de Prazos (14 dias, 30 dias):**
   - Eliminar qualquer menção a "prazos de 14 dias" e "suporte de 30 dias".
   - Na stats-bar da Home: substituir o stat `14 Dias / Prazo Médio` por `Estratégia / e Posicionamento`.
   - Nos bullets e parágrafos de serviços/sobre: substituir por "Previsibilidade e entregas ágeis alinhadas ao seu cronograma" e "Acompanhamento e suporte técnico de aplicação".

3. **Design de Wireframe Dark Sem Fotos (Estrutura Arquitetural de Wireframe):**
   - **Remover todas as tags `<img>` e fotos reais do site.**
   - No lugar de cada imagem/mockup, criar **caixas estruturais de Wireframe Dark** elegantes (`.wireframe-box`, `.wireframe-media-slot`, `.wireframe-badge`), com:
     - Fundo escuro sutil com grid blueprint técnico (`rgba(255, 255, 255, 0.03)` com linhas pontilhadas ou bordas suaves).
     - Ícone arquitetural sutil de viewport/blueprint.
     - Tag técnica de Wireframe (ex: `[ SUGESTÃO DE IMAGEM / MÍDIA: MOCKUP EDITORIAL ]`).
     - **Texto descritivo detalhado da sugestão visual:** orientando exatamente o tipo de foto, enquadramento, iluminação e elementos que deverão ser inseridos futuramente naquela posição.

4. **CTA Única e Padronizada em Todo o Site: `"Falar com Especialista"`:**
   - Padronizar **todos os botões de ação** (header, heros, seções intermediárias, painéis de abas, banners de fechamento e rodapés) com o texto idêntico:
     **`Falar com Especialista`**
   - Manter consistência absoluta de conversão e eliminar CTAs divergentes ("Solicitar Proposta", "Ver Todas as Soluções", "Iniciar Projeto", "Conhecer Soluções", "Quero Elevar Minha Marca", etc.).

---

## 2. Descritivo Estrutural por Página (Wireframe Seção por Seção)

### 📄 `index.html` (Home em Wireframe Dark)
* **Header:** Logo Ventra | Nav (Home, Soluções, Sobre, Contato) | Botão CTA: `[ Falar com Especialista ]`
* **Hero:**
  * Badge: `[ DESIGN FOR BUSINESS ]`
  * H1: *"Criamos marcas projetadas para vender e crescer."*
  * Lead: Texto sem travessões e sem promessas de dias.
  * CTA Único: `[ Falar com Especialista ]`
* **Stats Bar:** `+150 Projetos Entregues` | `Estratégia e Posicionamento` | `Design for Business / Foco em Resultado Comercial`
* **Cards de Soluções:** 3 cards limpos direcionando para as abas com botão/link `[ Falar com Especialista ]`.
* **Manifesto:** Texto fluido sem travessões.
* **Processo:** 4 etapas sem menção a prazos numéricos.
* **Portfólio / Cases:** Substituição das 3 fotos reais por **3 Slots Estruturais de Wireframe Dark**:
  * *Slot 1:* `[ SUGESTÃO DE IMAGEM: Mockup de Identidade Visual Corporativa PME ]` - Descrição: "Foto em close-up de papelaria corporativa institucional, cartões em papel texturizado com relevo seco e paleta sóbria, iluminação direcional suave."
  * *Slot 2:* `[ SUGESTÃO DE IMAGEM: Linha de Embalagens para PDV ]` - Descrição: "Renderização 3D de linha de produtos/latas em prateleira escura com acabamento fosco e detalhes em hot stamping dourado."
  * *Slot 3:* `[ SUGESTÃO DE IMAGEM: Decks e Criativos de Alta Conversão B2B ]` - Descrição: "Composição com telas de smartphone e laptop exibindo pranchas de marca e criativos de anúncios com alto contraste."
* **Banner de Fechamento:** CTA único: `[ Falar com Especialista ]`
* **Footer:** Padronizado com botão `[ Falar com Especialista ]`.

---

### 📄 `servicos.html` (Soluções em Wireframe Dark)
* **Header:** CTA: `[ Falar com Especialista ]`
* **Hero:** Sem travessões.
* **Cards de Abas:** 3 cards limpos sem promessas de "14 dias".
* **Painéis das Abas (Split-Screen):**
  * **Aba 1 (B2B / Agências):**
    * Bullets limpos sem menção a 14 dias ("Prazos e cronogramas alinhados à sua pauta operacional").
    * CTA: `[ Falar com Especialista ]`
    * Coluna Direita: **Slot de Wireframe Dark** com descrição: *"Sugestão de Mídia: Vídeo/loop ou mockup demonstrando ecossistema de criativos para tráfego e pranchas de marca em dark mode."*
    * Cases da Aba 1: 3 Slots de Wireframe com descritivos de campanhas B2B.
  * **Aba 2 (Empresas / PMEs):**
    * Bullets limpos sem menção a 30 dias ("Acompanhamento contínuo e suporte de aplicação").
    * CTA: `[ Falar com Especialista ]`
    * Coluna Direita: **Slot de Wireframe Dark** com descrição: *"Sugestão de Mídia: Mockup de Brand Book aberto ao lado de dispositivos móveis com a marca aplicada."*
    * Cases da Aba 2: 3 Slots de Wireframe com descritivos de marcas corporativas.
  * **Aba 3 (Sob Demanda & Embalagens):**
    * CTA: `[ Falar com Especialista ]`
    * Coluna Direita: **Slot de Wireframe Dark** com descrição: *"Sugestão de Mídia: Visualização de protótipo de embalagem com acabamentos especiais de gráfica e facas de corte."*
    * Cases da Aba 3: 3 Slots de Wireframe com descritivos de embalagens físicas.
* **Banner de Fechamento:** CTA: `[ Falar com Especialista ]`

---

### 📄 `sobre.html` (Sobre Nós em Wireframe Dark)
* **Header:** CTA: `[ Falar com Especialista ]`
* **Hero Invertido:**
  * Lado Direito: **Slot de Wireframe Dark** com descrição: *"Sugestão de Vídeo/Imagem: Tomada cinematográfica dos bastidores do estúdio, mostrando processo de criação e alinhamento estratégico."*
* **Manifesto:** Texto sem travessões e sem menção a 14 dias.
* **Metodologia (Z-Pattern):**
  * Os 4 blocos de imagens substituídos por **Slots de Wireframe Dark**:
    * Passo 1: *"Sugestão: Fotografia de mesa de reunião com anotações de briefing e mapas de personas."*
    * Passo 2: *"Sugestão: Esquema visual de posicionamento de mercado e matriz de diferenciação."*
    * Passo 3: *"Sugestão: Estudo tipográfico e construção geométrica do símbolo/marca."*
    * Passo 4: *"Sugestão: Guias de cor Pantone, provas de impressão gráfica e mockups tangíveis."*
* **Banner de Fechamento:** CTA: `[ Falar com Especialista ]`

---

### 📄 `contato.html` (Contato em Wireframe Dark)
* **Header:** CTA: `[ Falar com Especialista ]`
* **Coluna Esquerda:** Texto sem travessões.
* **Coluna Direita (Formulário):**
  * Campos de triagem qualificados mantidos.
  * Botão de Envio do formulário: `[ Falar com Especialista ]`

---

### 🎨 `main.css` (Componentes de Wireframe Dark)
* Criação das classes:
  * `.wireframe-slot`: Container com bordas tracejadas suaves (`border: 1px dashed rgba(255,255,255,0.2)`), fundo cinza grafite técnico (`#121214`), padrão de grid blueprint discreto e cantos chanfrados ou arredondados.
  * `.wireframe-tag`: Pill superior informando `[ SUGESTÃO DE IMAGEM / MÍDIA ]`.
  * `.wireframe-desc`: Texto com tipografia mono ou sans-serif sutil explicando a sugestão visual.
  * `.wireframe-icon`: Ícone técnico vetorial de blueprint/placeholder.

---

## 3. Matriz de Execução

1. [main.css](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/styles/main.css) -> Estilização das classes de Wireframe Dark.
2. [index.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/index.html) -> Aplicação dos 4 pontos (sem travessões, sem prazos, sem fotos com slots de wireframe, CTA única).
3. [servicos.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/servicos.html) -> Aplicação dos 4 pontos em todas as abas.
4. [sobre.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/sobre.html) -> Aplicação dos 4 pontos na metodologia e manifesto.
5. [contato.html](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/app/contato.html) -> Aplicação dos 4 pontos e CTA única no botão.
6. [COPY](file:///d:/ANTIGRAVITY%20PROJETOS/TESTE/my-first-project/Projetos/Ventra/COPY) -> Atualização dos arquivos markdown.
