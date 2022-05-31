$version="Alpha 1.1.2"

For ($i=0; $i -le 100; $i++) {
    Start-Sleep -Milliseconds 20
    Write-Progress -Activity "Installing..." -PercentComplete $i -CurrentOperation "Version: $version"
    mkdir bin >$null 2>&1
    git clone https://github.com/Shining-Gold-Studios/Gold-Installer-Repo.git . >$null 2>&1

}   
