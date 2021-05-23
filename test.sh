if curl -s --head  --request GET http://localhost:3000 | grep "200 OK" > /dev/null; then 
   echo "Website is UP"
else
   echo "Website is DOWN"
fi
