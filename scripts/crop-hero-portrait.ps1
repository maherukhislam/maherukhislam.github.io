# One-off asset tool: crops the sparkle watermark (bottom-right) off the hero portrait
# and writes an optimized PNG to public/hero-portrait.png.
# Usage: powershell -File scripts/crop-hero-portrait.ps1 -Src <path> -Out <path>
param(
  [string]$Src = "C:\Users\maher\OneDrive\Documents\portfolio.new\upload\pasted_image_1787929300664.png",
  [string]$Out = "C:\Users\maher\OneDrive\Documents\portfolio.new\public\hero-portrait.png"
)

try {
  Add-Type -AssemblyName System.Drawing
} catch {
  Write-Output "ERR Add-Type: $($_.Exception.Message)"
  exit 1
}

$img = [System.Drawing.Image]::FromFile($Src)
$W = $img.Width
$H = $img.Height

# Crop window: keep the central subject, cut ~11% off each side and a sliver of
# the bottom-right corner where the watermark sparkle sits.
$left = [int][Math]::Round($W * 0.11)
$width = [int][Math]::Round($W * 0.78)
$top = 0
$height = [int][Math]::Round($H * 0.97)

$bmp = New-Object System.Drawing.Bitmap $width, $height
$gfx = [System.Drawing.Graphics]::FromImage($bmp)
$gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$srcRect = New-Object System.Drawing.Rectangle $left, $top, $width, $height
$dstRect = New-Object System.Drawing.Rectangle 0, 0, $width, $height
$gfx.DrawImage($img, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gfx.Dispose()

$bmp.Save($Out, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()

$cropImg = [System.Drawing.Image]::FromFile($Out)
Write-Output "OK: $W x $H -> $left/+ $width x $height from ($left,$top) | saved $Out at $($cropImg.Width) x $($cropImg.Height)"
$cropImg.Dispose()
