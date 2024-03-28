export GH_USERNAME="ChrisDR2024"
export GITHUB_TOKEN=""
GITHUB_IMAGE_NAME="hello-world"
export GITHUB_VER="1.0.0"
export TAG_NAME="ghcr.io/$GH_USERNAME/$GITHUB_IMAGE_NAME:$GITHUB_VER"

echo $GITHUB_TOKEN | docker login ghcr.io -u $GH_USERNAME --password-stdin

docker tag $GITHUB_IMAGE_NAME:latest $TAG_NAME

docker push $TAG_NAME

LABEL org.opencontainers.image.source https://github.com/OWNER/REPO