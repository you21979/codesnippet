#!/bin/bash
FOREVER_PATH=../../../../../node_modules/forever/bin
APP=q.js
PIDFILE=/tmp/node-app.pid

OPTION="-p /tmp --pidfile $PIDFILE"

case $1 in
 start) $FOREVER_PATH/forever start $OPTION $APP;;
 stop) $FOREVER_PATH/forever stop $OPTION $APP;;
 restart) $FOREVER_PATH/forever restart $OPTION $APP;;
 graceful) ;;
esac

# kill -sigusr2
