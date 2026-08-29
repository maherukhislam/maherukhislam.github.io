# Generates brand PNGs for the site: favicon, apple touch icon, and OG image.
# Run from the repo root:  powershell -File scripts\generate-brand-assets.ps1
# ASCII only - no special punctuation in strings or comments.

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot

function New-MonoIcon {
    param([int]$Size, [string]$OutPath)
    $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::Transparent)

    $r = [Math]::Max(8, [int]($Size * 0.22))
    $d = $r * 2
    $rounded = New-Object System.Drawing.Drawing2D.GraphicsPath
    $rounded.AddArc(0, 0, $d, $d, 180, 90)
    $rounded.AddArc($Size - $d - 1, 0, $d, $d, 270, 90)
    $rounded.AddArc($Size - $d - 1, $Size - $d - 1, $d, $d, 0, 90)
    $rounded.AddArc(0, $Size - $d - 1, $d, $d, 90, 90)
    $rounded.CloseFigure()
    $g.FillPath([System.Drawing.Brushes]::Black, $rounded)

    $font = New-Object System.Drawing.Font('Arial', ($Size * 0.34), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0, ($Size * 0.02), $Size, $Size)
    $g.DrawString('MI', $font, [System.Drawing.Brushes]::White, $rect, $sf)

    $g.Dispose()
    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "wrote $OutPath"
}

New-MonoIcon -Size 64  -OutPath (Join-Path $root 'src\app\icon.png')
New-MonoIcon -Size 180 -OutPath (Join-Path $root 'src\app\apple-icon.png')

# 1200x630 Open Graph image: black canvas, faint grid, name, role, domain.
$w = 1200; $h = 630
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear([System.Drawing.Color]::FromArgb(255, 0, 0, 0))

$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(16, 255, 255, 255))
for ($x = 0; $x -le $w; $x += 40) { $g.DrawLine($gridPen, $x, 0, $x, $h) }
for ($y = 0; $y -le $h; $y += 40) { $g.DrawLine($gridPen, 0, $y, $w, $y) }

$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

$greenBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 134, 239, 172))
$greenFont = New-Object System.Drawing.Font('Consolas', 15, [System.Drawing.FontStyle]::Bold)
$g.DrawString('OPEN FOR SELECT WEB AND PRODUCT WORK', $greenFont, $greenBrush, (New-Object System.Drawing.RectangleF(0, 118, $w, 40)), $sf)

$titleFont = New-Object System.Drawing.Font('Impact', 96)
$g.DrawString('MAHERUKH ISLAM', $titleFont, [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF(0, 195, $w, 170)), $sf)

$grayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 170, 170, 170))
$subFont = New-Object System.Drawing.Font('Arial', 21, [System.Drawing.FontStyle]::Bold)
$g.DrawString('C R E A T I V E   W E B   B U I L D E R', $subFont, $grayBrush, (New-Object System.Drawing.RectangleF(0, 375, $w, 50)), $sf)

$dimBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 120, 120, 120))
$smallFont = New-Object System.Drawing.Font('Consolas', 15)
$g.DrawString('maherukhislam.github.io', $smallFont, $dimBrush, (New-Object System.Drawing.RectangleF(0, 555, $w, 40)), $sf)

$g.Dispose()
$ogPath = Join-Path $root 'public\og-image.png'
$bmp.Save($ogPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "wrote $ogPath"
