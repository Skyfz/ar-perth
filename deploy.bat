@echo off
echo Starting deployment...

git add .
if %errorlevel% neq 0 (
    echo Error: Failed to stage changes
    echo Closing in 5 seconds...
    timeout /t 5
    exit
)

git commit -m "error_fix_commit"
if %errorlevel% neq 0 (
    echo Error: Failed to commit changes
    echo Closing in 5 seconds...
    timeout /t 5
    exit
)

git push -u origin main
if %errorlevel% neq 0 (
    echo Error: Failed to push changes
    echo Closing in 5 seconds...
    timeout /t 5
    exit
)

echo Deployment completed successfully!
rem Optional: If you want the success window to also close automatically, change the line below to 'timeout /t 5'
timeout /t 5