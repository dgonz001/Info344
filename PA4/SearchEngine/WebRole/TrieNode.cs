﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebRole
{
    public class TrieNode
    {
            public bool IsTerminal = false;
            public Dictionary<char, TrieNode> Edges = new Dictionary<char, TrieNode>();
    }
}