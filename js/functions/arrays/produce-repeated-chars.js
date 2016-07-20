function repeatChars( str, n ){
    return [...Array(n+1)].join( str );
}

repeatChars('a',5); // 'aaaaa'
repeatChars('ol',3); // 'ololol'