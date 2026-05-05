# Video Compression Instructions

## Prerequisites
Install ffmpeg from https://ffmpeg.org/download.html (Windows: get the "full" build from gyan.dev)

## Quick Start
Run the batch file from project root:
```
compress-videos.bat
```

This creates WebM files (`.webm`) at ~400KB each.

## Manual Commands (if batch fails)
```bash
cd src/assets

# Video 1,2,4: CRF 30 (balanced)
ffmpeg -i video1.mp4 -vf "scale=720:-2" -c:v libvpx-vp9 -crf 30 -b:v 0 -r 30 -an -threads 4 video1.webm -y

# Video 3: CRF 28 (slightly higher quality)
ffmpeg -i video3.mp4 -vf "scale=720:-2" -c:v libvpx-vp9 -crf 28 -b:v 0 -r 30 -an -threads 4 video3.webm -y
```

## After Compression

1. **Update `Portfolio.jsx` imports** (line 1-4):
```javascript
import video1 from '../assets/video1.webm';
import video2 from '../assets/video2.webm';
import video3 from '../assets/video3.webm';
import video4 from '../assets/video4.webm';
```

2. **Delete original MP4s** from repo (52MB → 2MB):
```bash
del src\assets\video*.mp4
```
Add to `.gitignore` to prevent re-adding:
```
# Large video originals - use compressed .webm
src/assets/video*.mp4
```

3. **Test locally**:
```bash
npm run dev
```
Verify videos autoplay smoothly, muted, looping.

## If WebM Quality Is Poor

### Option A: Better quality (CRF 26, ~800KB each)
```bash
ffmpeg -i video1.mp4 -vf "scale=720:-2" -c:v libvpx-vp9 -crf 26 -b:v 0 -r 30 -an -threads 4 video1.webm -y
```

### Option B: Smaller (CRF 32, ~250KB each)
```bash
ffmpeg -i video1.mp4 -vf "scale=720:-2" -c:v libvpx-vp9 -crf 32 -b:v 0 -r 30 -an -threads 4 video1.webm -y
```

### Option C: Keep MP4 but highly compressed
```bash
ffmpeg -i video1.mp4 -vf "scale=720:-2" -c:v libx264 -crf 28 -preset slow -r 30 -an -movflags +faststart video1_small.mp4 -y
```

## Expected Results

| Format | Size (each) | Total | Browser Support |
|--------|-------------|-------|----------------|
| Original MP4 | 10-15 MB | 52 MB | ✅ All |
| WebM VP9 CRF30 | 400-550 KB | ~2 MB | ✅ Modern (Safari 14.1+) |
| MP4 compressed | 600-900 KB | ~3.5 MB | ✅ All |

**Recommendation:** WebM gives smallest size + good quality. Safari 14.1+ supports VP9. If you need older Safari support, keep one MP4 fallback (video1_legacy.mp4) and use dual `<source>` tags in LazyVideo.

## Fallback Implementation (Dual Format)

If you want MP4 fallback for older browsers:

1. Create both `.webm` and `_small.mp4` versions
2. Update Portfolio.jsx:
```jsx
const projects = [
  {
    ...,
    videoWebm: video1,
    videoMp4: video1_small, // import this separately
  }
]
```
3. Update LazyVideo component to render two `<source>` tags.

But for simplicity, single WebM format is fine for 2025+.

## Troubleshooting

**"ffmpeg not recognized"** → Restart terminal after install, or use full path: `C:\ffmpeg\bin\ffmpeg.exe`

**"Quality too poor"** → Lower CRF (26-28). Accept slightly larger file (600-800KB).

**"Still too large"** → Scale to 540p: `-vf "scale=540:-2"` (540×960 vertical)

**"File not found"** → Run script from project root where `src\assets\` folder exists.

---

Once done, Commit changes:
```bash
git add src/assets/video*.webm
git rm src/assets/video*.mp4  # if deleting originals
git commit -m "feat: compress portfolio videos to WebM (52MB → 2MB)"
```
