package jasmineTest;
import jasmine.Jasmine;
import jasmineTest.specs.JasmineSpec;
import jasmineTest.specs.MatchersSpec;

class Main {
	static function main() {
		new Main();
	}
	
	public function new() {
		new JasmineSpec();
		new MatchersSpec();

		Jasmine.getEnv().addReporter(Jasmine.newTrivialReporter());
		Jasmine.getEnv().execute();		
	}
	
}