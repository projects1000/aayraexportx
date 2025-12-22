$ErrorActionPreference = "Stop"
git status > git_status.txt
git add .
git commit -m "Enforce dark background globally"
git push > push_output.txt 2>&1
if ($?) {
    "Push Success" | Out-File push_status.txt
} else {
    "Push Failed" | Out-File push_status.txt
}
