Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\Dell\Desktop\amaoso\public\images\logo.png")

$samples = @()
for ($x = 10; $x -lt $bmp.Width - 10; $x += 10) {
    for ($y = 10; $y -lt $bmp.Height - 10; $y += 5) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.A -gt 150 -and ($p.R -lt 240 -or $p.G -lt 240 -or $p.B -lt 240)) {
            $hex = "#{0:x2}{1:x2}{2:x2}" -f [int]$p.R, [int]$p.G, [int]$p.B
            $samples += $hex
        }
    }
}
$bmp.Dispose()

$samples | Group-Object | Sort-Object Count -Descending | Select-Object -First 15 | ForEach-Object {
    Write-Output "$($_.Name): $($_.Count)"
}
