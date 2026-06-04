# Publicar no GitHub — repositório `servitecpoa2`

## Opção 1 — Script automático (recomendado)

1. Instale o **Git**: https://git-scm.com/download/win  
2. Instale o **GitHub CLI**: https://cli.github.com/  
3. Faça login: `gh auth login`  
4. No PowerShell, na pasta do projeto:

```powershell
cd "C:\site servitecpoa"
.\scripts\push-github.ps1
```

O script cria o repositório **servitecpoa2** na sua conta e envia o código.

---

## Opção 2 — Manual

```powershell
cd "C:\site servitecpoa"
git init
git branch -M main
git add .
git commit -m "feat: site ServitecPoa"
```

Crie o repositório em https://github.com/new com o nome **servitecpoa2** (sem README).

```powershell
git remote add origin https://github.com/SEU_USUARIO/servitecpoa2.git
git push -u origin main
```

---

## Deploy na Vercel

1. Importe o repositório `servitecpoa2` em https://vercel.com  
2. Framework: **Next.js** (detectado automaticamente)  
3. Domínio: `www.servitecpoa.com.br`
