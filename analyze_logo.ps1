Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\Dell\Desktop\amaoso\public\images\logo.png")

$colorCounts = @{}
for ($x = 0; $x -lt $bmp.Width; $x += 2) {
    for ($y = 0; $y -lt $bmp.Height; $y += 2) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.A -gt 50) {
            # Quantize color slightly to group nearby shades
            $r = [Math]::Round($p.R / 16) * 16
            $g = [Math]::Round($p.G / 16) * 16
            $b = [Math]::Round($p.B / 16) * 16
            if ($r -gt 240 -and $g -gt 240 -and $b -gt 240) { continue } # skip pure white
            if ($r -lt 30 -and $g -lt 30 -and $b -lt 30) { continue } # skip pure black
            $hex = "#{0:X2}{1:X2}{2:X2}" -f $r, $g, $b
            if ($colorCounts.ContainsKey($hex)) {
                $colorCounts[$hex]++
            } else {
                $colorCounts[$hex] = 1
            }
        }
    }
}
$bmp.Dispose()

Write-Output "DOMINANT COLORS IN LOGO.PNG:"
$colorCounts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 10 | ForEach-Object {
    Write-Output "$($_.Key): $($_.Value) pixels"
}
