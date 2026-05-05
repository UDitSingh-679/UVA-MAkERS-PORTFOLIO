@echo off
echo ============================================
echo  Video Compression Script for UVA Makers
echo  Target: WebM VP9, 720p vertical, <500KB each
echo ============================================
echo.

REM Check if ffmpeg is available
where ffmpeg >nul 2>&1
if errorlevel 1 (
    echo ERROR: ffmpeg not found in PATH.
    echo Please install ffmpeg from https://ffmpeg.org/download.html
    echo and add it to your system PATH, then run this script again.
    pause
    exit /b 1
)

echo Compressing 4 videos to WebM format...
echo.

set ASSETS_DIR=src\assets

echo [1/4] Compressing video1.mp4 ...
ffmpeg -i "%ASSETS_DIR%\video1.mp4" ^
  -vf "scale=720:-2" ^
  -c:v libvpx-vp9 ^
  -crf 30 ^
  -b:v 0 ^
  -r 30 ^
  -an ^
  -threads 4 ^
  "%ASSETS_DIR%\video1.webm" ^
  -y
if errorlevel 1 echo FAILED video1 & pause & exit /b 1

echo [2/4] Compressing video2.mp4 ...
ffmpeg -i "%ASSETS_DIR%\video2.mp4" ^
  -vf "scale=720:-2" ^
  -c:v libvpx-vp9 ^
  -crf 30 ^
  -b:v 0 ^
  -r 30 ^
  -an ^
  -threads 4 ^
  "%ASSETS_DIR%\video2.webm" ^
  -y
if errorlevel 1 echo FAILED video2 & pause & exit /b 1

echo [3/4] Compressing video3.mp4 ...
ffmpeg -i "%ASSETS_DIR%\video3.mp4" ^
  -vf "scale=720:-2" ^
  -c:v libvpx-vp9 ^
  -crf 28 ^
  -b:v 0 ^
  -r 30 ^
  -an ^
  -threads 4 ^
  "%ASSETS_DIR%\video3.webm" ^
  -y
if errorlevel 1 echo FAILED video3 & pause & exit /b 1

echo [4/4] Compressing video4.mp4 ...
ffmpeg -i "%ASSETS_DIR%\video4.mp4" ^
  -vf "scale=720:-2" ^
  -c:v libvpx-vp9 ^
  -crf 30 ^
  -b:v 0 ^
  -r 30 ^
  -an ^
  -threads 4 ^
  "%ASSETS_DIR%\video4.webm" ^
  -y
if errorlevel 1 echo FAILED video4 & pause & exit /b 1

echo.
echo ============================================
echo  Compression Complete!
echo ============================================
echo.
echo Checking output file sizes:
dir "%ASSETS_DIR%\video*.webm"
echo.
echo Expected: ~300-500KB each (total <2MB)
echo If files are >1MB, re-run with -crf 32 for smaller size.
echo.
pause
