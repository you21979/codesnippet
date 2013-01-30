######################################################
#config
######################################################
TSC = tsc
NODE = node
COMPILE = $(TSC)
EXEC = $(NODE)

#make target
BOOTSTRAP = hello.js
SRCDIR = .
OUTFILES = \
	hello.js


######################################################
#make
######################################################

.SUFFIXES: .ts .js

exec: $(SRCDIR)/$(BOOTSTRAP)
	@$(EXEC) $<

all:$(OUTFILES)

.ts.js:
	$(COMPILE) $(SRCDIR)/$<

clean:
	-rm $(OUTFILES)


