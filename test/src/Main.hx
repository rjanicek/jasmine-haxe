import jasmine.Jasmine;
import specs.JasmineSpec;
import specs.MatchersSpec;
import specs.SpySpec;

class Main {
	static function main() {
		new JasmineSpec();
		new MatchersSpec();
		new SpySpec();

		Jasmine.getEnv().addReporter(Jasmine.newHtmlReporter());
		Jasmine.getEnv().execute();		
	}	
}