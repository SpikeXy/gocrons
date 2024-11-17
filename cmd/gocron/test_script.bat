@echo off
echo Starting the test script...
echo Current working directory: %cd%
echo System Information:
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
echo Script execution completed!
exit /b 0