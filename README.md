# docker-browser-gui

## Host Setup (macOS)

```bash
# Display setup
brew install --cask xquartz
open -a XQuartz
xhost + localhost

# Audio setup
brew install pulseaudio
pulseaudio --load=module-native-protocol-tcp --exit-idle-time=-1 --daemon
```

## Run the program
```
docker compose up
```
