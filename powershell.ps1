# Get System Uptime
$uptime = (Get-CimInstance Win32_OperatingSystem).LastBootUpTime
$uptimeFormatted = [math]::Round((New-TimeSpan -Start $uptime).TotalHours, 2)

# Display Output
Write-Host "System Uptime: $uptimeFormatted hours" -ForegroundColor Green
