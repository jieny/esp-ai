@echo off 
set THISDATETIME=%DATE:~0,4%%DATE:~5,2%%DATE:~8,2%%TIME:~0,2%%TIME:~3,2%%TIME:~6,2%
set THISDATETIME=%THISDATETIME: =0%
echo %THISDATETIME%
echo --------------
: git add .
git commit -a -m %THISDATETIME%
echo --------------
git push
pause
