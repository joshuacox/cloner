.POSIX:
.PHONY: all install uninstall test site-install site-dev site-build clean

PREFIX ?= /usr/local
BINDIR ?= $(PREFIX)/bin
MANDIR ?= $(PREFIX)/share/man/man1
BASHCOMPDIR ?= $(PREFIX)/share/bash-completion/completions
ZSHCOMPDIR ?= $(PREFIX)/share/zsh/site-functions

all:
	@echo "Nothing to compile for cloner. Run 'make install' to install."

install:
	install -d $(DESTDIR)$(BINDIR)
	install -m 755 cloner $(DESTDIR)$(BINDIR)/cloner
	install -d $(DESTDIR)$(MANDIR)
	install -m 644 man/cloner.1 $(DESTDIR)$(MANDIR)/cloner.1
	install -d $(DESTDIR)$(BASHCOMPDIR)
	install -m 644 completions/cloner.bash $(DESTDIR)$(BASHCOMPDIR)/cloner
	install -d $(DESTDIR)$(ZSHCOMPDIR)
	install -m 644 completions/_cloner $(DESTDIR)$(ZSHCOMPDIR)/_cloner

uninstall:
	rm -f $(DESTDIR)$(BINDIR)/cloner
	rm -f $(DESTDIR)$(MANDIR)/cloner.1
	rm -f $(DESTDIR)$(BASHCOMPDIR)/cloner
	rm -f $(DESTDIR)$(ZSHCOMPDIR)/_cloner

test:
	./test/test_cloner.sh

site-install:
	cd site && npm install

site-dev:
	cd site && npm run dev

site-build:
	cd site && npm run build
