package jasmineTest;
import jasmine.Jasmine;
import jasmineTest.specs.JasmineSpec;
import jasmineTest.specs.MatchersSpec;
import jasmineTest.specs.SpySpec;

class Main {
	static function main() {
		new Main();
	}
	
	public function new() {
		new JasmineSpec();
		new MatchersSpec();
		new SpySpec();

		Jasmine.getEnv().addReporter(Jasmine.newHtmlReporter());
		Jasmine.getEnv().execute();		
	}
	
}