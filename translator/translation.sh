#### function
excuteTask () {
  echo "START $1"
  node $1
  echo "END $1"
  echo "\n"
}
#### /function

echo '***** START translation *****'
echo "\n"

cd src
excuteTask translation
excuteTask output

echo '***** END translation *****'
