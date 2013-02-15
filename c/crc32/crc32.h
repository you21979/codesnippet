#ifndef __CRC32_H
#define __CRC32_H
#include <stdio.h>
#include <stdint.h>
void make_crc_table(void);
uint32_t crc32(uint8_t *buf, size_t len);
#endif	// __CRC32_H
