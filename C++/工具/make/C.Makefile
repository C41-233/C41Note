EXE = a.out
CC = gcc
INCLUDE = -Iinclude
LIB = -Llib
CFLAGS = 

CFILES = $(wildcard *.c)
DFILES = $(CFILES:.c=.d)
OBJS = $(CFILES:.c=.o)

all: $(EXE)

$(EXE): $(OBJS)
	$(CC) $+ $(LIB) -o $@

%.o: %.c %.d
	$(CC) -c $(INCLUDE) $(CFLAGS) -o $@ $<

%.d: %.c
	$(CC) -MM $(INCLUDE) $(CFLAGS) -o $@ $<

-include $(DFILES)

.PHONY clean
clean:
	rm $(OBJS)
	rm $(DFILES)