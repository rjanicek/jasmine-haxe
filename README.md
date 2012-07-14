jasmine-haxe
------------

Haxe bindings for Jasmine, a behavior-driven development framework for testing your JavaScript / Haxe code.

Tested with Haxe 2.09, Jasmine 1.2.0 and Chrome.

Specs -> http://rjanicek.github.com/jasmine-haxe
	
GitHub -> https://github.com/rjanicek/jasmine-haxe
	
Jasmine -> https://github.com/pivotal/jasmine

Example:
```haxe
import jasmine.Jasmine;

class JasmineSpec {
	public function new() {
		J.describe("Jasmine", function() {
			J.it("should test things", function() {
				J.expect(true).toBe(true);
				J.expect(true).not.toBe(false);
				J.expect(1).toBeDefined();
				J.expect(false).toBeFalsy();
				J.expect(2).toBeGreaterThan(1);
				J.expect("a").toBeLessThan("b");
				J.expect(null).toBeNull();
				J.expect(true).toBeTruthy();
				J.expect(Lib.eval("undefined")).toBeUndefined();
				J.expect([0, 1, 2, 3]).toContain(1);
				J.expect( [0] ).toEqual( [0] );
				J.expect("jasmine is cool").toMatch("jasmine");
				J.expect(function() { throw "knife"; } ).toThrow("knife");
			} );
		});
	}
}

class Main {
	static function main() {
		new JasmineSpec();
		Jasmine.getEnv().addReporter(Jasmine.newHtmlReporter());
		Jasmine.getEnv().execute();		
	}	
}
```