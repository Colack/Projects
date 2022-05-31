$version="Alpha 1.1.2"

For ($i=0; $i -le 100; $i++) {
    Start-Sleep -Milliseconds 20
    Write-Progress -Activity "Installing..." -PercentComplete $i -CurrentOperation "Version: $version"
    cd $HOME 
    mkdir bin/Gold-Lang >$null 2>&1
    cd bin/Gold-Lang 
    git clone http://github.com/Shining-Gold-Studios/Gold-Language.git . >$null 2>&1

} 
