# 🍓 Mapeamento de Assets — Oferta 07: Morango Cravejado de Vitrine

Cada slot visual de `index.html` (atributo `data-slot`) aponta para um arquivo desta pasta.
As imagens de origem ficam em `01-OFERTA/07-imagens/` e são convertidas para `.webp` aqui.

---

## 📁 Arquivos em uso

```text
site/assets/
├── logo-morango-cravejado.webp   # Logo do header (PNG com alfa → webp)
├── capas/
│   ├── tit-09-receitas-tecnicas.webp    # Capa: 7 Receitas Técnicas de Sabores Iniciais
│   ├── tit-10-ficha-custo.webp          # Capa: Ficha Editável de Custo e Preço
│   └── tit-11-cardapio-whatsapp.webp    # Capa: Cardápio Inicial Editável para WhatsApp
├── metodo/
│   ├── met-01-base-seca.webp     # Camada 1: Base Seca e Higienização
│   ├── met-02-crocancia.webp     # Camada 2: Crocância Quebrada
│   └── met-03-venda-dia.webp     # Camada 3: Linha de Venda no Mesmo Dia
├── pagina/
│   ├── pag-02-hero-doce.webp          # Vitrine coletiva (Seção 6)
│   ├── pag-07-produto-basico.webp     # Mockup da Oferta Básica (R$ 17,00)
│   └── pag-08-produto-completo.webp   # Mockup do Pacote Completo (header + Plano Completo)
└── sabores/
    ├── sab-01-ninho.webp
    ├── sab-02-brigadeiro-branco.webp
    ├── sab-03-pistache.webp
    ├── sab-04-frutas-vermelhas.webp
    ├── sab-05-caramelo-salgado.webp
    ├── sab-06-chocolate-meio-amargo.webp
    └── sab-07-prestigio-branco.webp
```

---

## 🗺️ Slot HTML ⟷ arquivo de origem

| Slot (`data-slot`) | Arquivo em `assets/` | Origem em `07-imagens/` | Uso na página |
|---|---|---|---|
| `PAG-08` | `pagina/pag-08-produto-completo.webp` | `pagina/PAG-08_2x.jpg` | Mockup do header e do Plano Completo |
| `TIT-09` | `capas/tit-09-receitas-tecnicas.webp` | `capas/TIT-09_2x.jpg` | Prévia "Receitas Técnicas" (Seção 2) |
| `TIT-11` | `capas/tit-11-cardapio-whatsapp.webp` | `capas/TIT-11_2x.jpg` | Prévia "Cardápio & Roteiro de Pedidos" (Seção 2) |
| `TIT-10` | `capas/tit-10-ficha-custo.webp` | `capas/TIT-10_2x.jpg` | Prévia "Ficha de Custo e Margem" (Seção 2) |
| `MET-01` a `MET-03` | `metodo/met-0X-*.webp` | `images/MET-0X_2x.jpg` | Os 3 passos do Método (Seção 4) |
| `SAB-01` a `SAB-07` | `sabores/sab-0X-*.webp` | `images/SAB-0X_2x.jpg` | Os 7 sabores (Seção 6) |
| `PAG-02` | `pagina/pag-02-hero-doce.webp` | `images/PAG-02_2x.jpg` | Vitrine completa (Seção 6) |
| `PAG-07` | `pagina/pag-07-produto-basico.webp` | `pagina/PAG-07_2x.jpg` | Mockup do Plano Básico (Seção 8) |
| — | `logo-morango-cravejado.webp` | `pagina/Logo_design_for_Morango_Cravejado_*.png` | Logo do header |

> **Order bumps não têm slot.** Pela regra fixa do dossiê, eles existem só dentro do checkout —
> nenhuma seção, card, preço ou menção na página de vendas.

---

## ⚙️ Fallback visual

Se um arquivo faltar, `app.js` marca o container com `is-fallback` e a página exibe um bloco
estilizado com o ID do slot, em vez do ícone de imagem quebrada do navegador.

---

## 🎨 Conversão usada

- Formato: `.webp`, qualidade 82 (`method=6`), corte central para a proporção alvo.
- Quadradas (`1:1`): `1200 × 1200 px`. Mockups (`16:9`): `1920 × 1080 px`. Logo: 900 px de largura, com alfa.
- Os mockups `PAG-07` / `PAG-08` têm fundo branco puro e usam `mix-blend-mode: multiply` para fundir no creme da página.
