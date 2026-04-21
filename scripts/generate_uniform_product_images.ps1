Set-Location "$PSScriptRoot\.."

$outDir = "public/images/products/real-uniform"
if (!(Test-Path $outDir)) {
  New-Item -ItemType Directory -Path $outDir | Out-Null
}

Add-Type -AssemblyName System.Drawing

function New-UniformImage($srcPath, $dstPath) {
  $W = 1600
  $H = 1000
  $bmp = New-Object System.Drawing.Bitmap($W, $H)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

  $img = [System.Drawing.Image]::FromFile($srcPath)

  $scaleBg = [Math]::Max($W / $img.Width, $H / $img.Height)
  $bgW = [int]($img.Width * $scaleBg)
  $bgH = [int]($img.Height * $scaleBg)
  $bgX = [int](($W - $bgW) / 2)
  $bgY = [int](($H - $bgH) / 2)
  $g.DrawImage($img, $bgX, $bgY, $bgW, $bgH)

  $overlay = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(135, 10, 15, 28))
  $g.FillRectangle($overlay, 0, 0, $W, $H)

  $pad = 96
  $frameX = $pad
  $frameY = 110
  $frameW = $W - (2 * $pad)
  $frameH = $H - 230

  $frameBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 17, 24, 39))
  $g.FillRectangle($frameBg, $frameX, $frameY, $frameW, $frameH)

  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(70, 255, 255, 255), 2)
  $g.DrawRectangle($pen, $frameX, $frameY, $frameW, $frameH)

  $innerPad = 26
  $targetW = $frameW - (2 * $innerPad)
  $targetH = $frameH - (2 * $innerPad)
  $scaleFg = [Math]::Min($targetW / $img.Width, $targetH / $img.Height)
  $fgW = [int]($img.Width * $scaleFg)
  $fgH = [int]($img.Height * $scaleFg)
  $fgX = [int]($frameX + ($frameW - $fgW) / 2)
  $fgY = [int]($frameY + ($frameH - $fgH) / 2)
  $g.DrawImage($img, $fgX, $fgY, $fgW, $fgH)

  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageDecoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)
  $bmp.Save($dstPath, $codec, $encParams)

  $img.Dispose()
  $overlay.Dispose()
  $frameBg.Dispose()
  $pen.Dispose()
  $g.Dispose()
  $bmp.Dispose()
}

$map = @(
  @{ src = "public/images/products/basmati-rice.jpg"; dst = "public/images/products/real-uniform/basmati-rice.jpg" },
  @{ src = "public/images/products/parboiled-rice.jpg"; dst = "public/images/products/real-uniform/parboiled-rice.jpg" },
  @{ src = "public/images/products/cashew-nuts.jpg"; dst = "public/images/products/real-uniform/cashew-nuts.jpg" },
  @{ src = "public/images/products/millet-rice.jpg"; dst = "public/images/products/real-uniform/millet-rice.jpg" },
  @{ src = "public/images/products/fresh-ginger.jpg"; dst = "public/images/products/real-uniform/fresh-ginger.jpg" },
  @{ src = "public/images/products/turmeric.jpg"; dst = "public/images/products/real-uniform/turmeric.jpg" },
  @{ src = "public/images/eucalyptus-poles-1.jpg"; dst = "public/images/products/real-uniform/eucalyptus-wood.jpg" }
)

foreach ($m in $map) {
  if (Test-Path $m.src) {
    New-UniformImage $m.src $m.dst
    Write-Output "Generated $($m.dst)"
  } else {
    Write-Output "Missing source: $($m.src)"
  }
}

Get-ChildItem $outDir | Select-Object Name, Length
