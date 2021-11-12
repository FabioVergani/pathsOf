function pathsOf(x) {
	const
		paths = [],
		O = Object,
		f = O.entries,
		walk = (e,m) => {
			for (const [k,v] of f(e)) {
				iterate(v,m.concat(k),v)
			}
		},
		iterate = (e,p,v) => {
			if (e instanceof O) {
				walk(e,p)
			} else {
				paths.push([p,v])
			}
		};
	iterate(x,[]);
	return paths;
}
