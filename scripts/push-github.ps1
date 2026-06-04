# Publica o projeto no GitHub como repositório "servitecpoa2"
# Requisitos: Git instalado (https://git-scm.com) e GitHub CLI (https://cli.github.com)

$ErrorActionPreference = "Stop"
$repoName = "servitecpoa2"
$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
if (-not (Test-Path "$root\package.json")) {
    $root = "C:\site servitecpoa"
}

Set-Location $root

function Require-Command($name) {
    if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
        Write-Error "Comando '$name' não encontrado. Instale e tente novamente."
    }
}

Require-Command git

if (-not (Test-Path ".git")) {
    git init
    git branch -M main
}

git add .
git status

$hasChanges = git diff --cached --quiet; $LASTEXITCODE -ne 0
if ($hasChanges) {
    git commit -m "feat: site ServitecPoa — consertos em eletrodomésticos

Site Next.js com SEO, formulário de solicitação, WhatsApp e design premium."
}

if (Get-Command gh -ErrorAction SilentlyContinue) {
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        gh repo create $repoName --public --source=. --remote=origin --push
        Write-Host "`nRepositório criado e enviado: https://github.com/$(gh api user -q .login)/$repoName"
    } else {
        git push -u origin main
        Write-Host "`nCódigo enviado para: $remote"
    }
} else {
    Write-Host @"

GitHub CLI (gh) não instalado. Após criar o repositório manualmente em:
  https://github.com/new  (nome: $repoName)

Execute:
  git remote add origin https://github.com/SEU_USUARIO/$repoName.git
  git push -u origin main
"@
}
