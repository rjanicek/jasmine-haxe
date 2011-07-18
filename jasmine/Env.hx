package jasmine;

typedef Env = {
	function addReporter( reporter : Reporter ) : Void;
	function describe( description : String, specDefinitions : Void -> Void ) : Void;
	function execute() : Void;
	function it( description : String, func : Void -> Void ) : Void;
}