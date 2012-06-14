// Regular expression that matches all symbols in the S category as per Unicode v3.2.0:
/[\x24\x2B\x3C-\x3E\x5E\x60\x7C\x7E\xA2-\xA9\xAC\xAE-\xB1\xB4\xB6\xB8\xD7\xF7\u02B9\u02BA\u02C2-\u02CF\u02D2-\u02DF\u02E5-\u02ED\u0374\u0375\u0384\u0385\u03F6\u0482\u06E9\u06FD\u06FE\u09F2\u09F3\u09FA\u0B70\u0E3F\u0F01-\u0F03\u0F13-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCF\u17DB\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20B1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u2132\u213A\u2140-\u2144\u214A\u214B\u2190-\u2328\u232B-\u23B3\u23B7-\u23CE\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2613\u2616\u2617\u2619-\u267D\u2680-\u2689\u2701-\u2704\u2706-\u2709\u270C-\u2727\u2729-\u274B\u274D\u274F-\u2752\u2756\u2758-\u275E\u2761-\u2767\u2794\u2798-\u27AF\u27B1-\u27BE\u27D0-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u3200-\u321C\u322A-\u3243\u3260-\u327B\u327F\u328A-\u32B0\u32C0-\u32CB\u32D0-\u32FE\u3300-\u3376\u337B-\u33DD\u33E0-\u33FE\uA490-\uA4C6\uFB29\uFDFC\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD2A-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDDD]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|/;